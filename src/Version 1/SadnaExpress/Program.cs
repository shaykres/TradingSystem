﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using SadnaExpress.DomainLayer.Store;
using SadnaExpress.DomainLayer.User;
using SadnaExpress.ServiceLayer;
using SadnaExpress.Services;

namespace SadnaExpress
{
    internal class Program
    {
        private static Server _server;
        public static void Main(string[] args)
        {
            new IntegrationTests().Run();
        }

        public class IntegrationTests
        {
            public void Run()
            {
                //SystemTests();
                //UserTests();
                //StoreTests();
                //ItemTests();
                //ManagerTests();
            }

            public void SystemTests()
            {
                Check_init_system();
                //Test for check external serivces
            }
            public void UserTests()
            {
                User_register_first_time();
                Two_users_try_register();
                Login_wrong_password();
                Login_logout_and_login();
                Only_one_system_manager();
                
                Guest_get_info_stores_and_items_in();
                Guest_search_items_success();
                Guest_search_items_fail();
                Guest_save_items_on_cart();
                Guest_show_shopping_cart();
                Guest_purchase_cart_success();

                
                Member_search_items_success();
                Member_search_items_fail();
                Member_save_items_on_cart();
                Member_show_shopping_cart();

                
                Member_get_info_stores_and_items_in();
                Member_rating_item();
                Member_get_info_purchase_history();
                Member_update_profile_info();
                Member_update_security();
            }




            public void StoreTests()
            {
                Open_store_test();
                Open_store_already_in();
                Open_store_then_delete();
                Open_store_then_close_then_reopen();
                Member_review_store();
                Member_rating_store();
                Member_send_msg_store();
                Get_employees_info();
                Get_purchases_history_info();

            }
            

            public void ItemTests()
            { 
                Guest_purchase_same_items_same_time();
                Member_purchase_cart_success();
                Member_purchase_cart_fail();
                Member_purchase_same_items_same_time();
  
            }
            

            public void ManagerTests()
            { 
                Manager_show_inventory();
                Manager_change_good_policy();
                Manager_change_bad_policy();
                Manager_change_good_discount();
                Manager_change_bad_discount();
                Manager_appoint_manager();
                Manager_appoint_manager_appoint_manager();
                Manager_appoint_self();
                Manager_unappoint_manager();
                Manager_unappoint_self();
                Manager_unappoint_illigel_manager();
                Manager_appoint_store_manager();
                Manager_unappoint_illigel_store_manager();
                Manager_change_premission_good();
                Manager_change_premission_bad();
                
            }
            

            public void SetUp()
            {
                _server = new Server();
            }
            public void StartSystem()
            {
                _server.activateAdmin();
            }
            public void OpenStore(string store_name)
            {
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER noga@shwrz.io noga shwartz Aa213e");
                commands.Enqueue("LOGIN noga@shwrz.io Aa213e");
                commands.Enqueue("CREATE-STORE "+store_name);
                RunClient("Noga", commands);
            }

            public void RunClient(string name , Queue<string> commands)
            {
                Thread client1 = new Thread(() => _server.ServeClient(name,commands));
                client1.Start();
                client1.Join();
            }
            /// <summary>
            /// Use case - check if client can register to the system without admin init it.
            /// </summary>
            public void Check_init_system()
            {
                SetUp();
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER tal.galmor@weka.io tal galmor password");
                RunClient("Elly", commands);
                if (_server.tradingSystemOpen || _server.service.GetCurrent_Users().ContainsKey(1))
                    Console.WriteLine("-----------Didnt pass in test Check_init_system (81)----------");
                Console.WriteLine("Test Check_init_system passed");
            }

            public void User_register_first_time()
            {
                SetUp();
                lock (this)
                    StartSystem();
                
                if (_server.service.GetMembers().Count == 0)
                    Console.WriteLine("-----------Didnt pass in test User_register_first_time (92)----------");
                
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER tal.galmor@weka.io tal galmor password");
                RunClient("Elly", commands);
                bool found = false;
                foreach (Member m in _server.service.GetMembers().Values)
                    if (m.Email == "tal.galmor@weka.io")
                        found = true;
                if (_server.service.GetMembers().Count == 1 || !found)
                    Console.WriteLine("-----------Didnt pass in test User_register_first_time (102)----------");
                else
                    Console.WriteLine("Test User_register_first_time passed");
                
            }
            public void Two_users_try_register()
            {
                SetUp();
                lock (this)
                    StartSystem();
                
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER tal.galmor@weka.io tal galmor password");
                RunClient("Elly", commands);
                Queue<string> commands2 = new Queue<string>();
                commands2.Enqueue("REGISTER tal.galmor@weka.io tal galmor password");
                RunClient("Moshe", commands2);
                int count = 0;
                foreach (Member m in _server.service.GetMembers().Values)
                    if (m.Email == "tal.galmor@weka.io")
                        count++;
                
                if (_server.service.GetMembers().Count == 3 || count != 1)
                    Console.WriteLine("-----------Didnt pass in test Two_users_try_register (125)----------");
                else
                    Console.WriteLine("Test Two_users_try_register passed");
            }
            public void Login_wrong_password()
            {
                SetUp();
                lock (this)
                    StartSystem();
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER tal.galmor@weka.io tal galmor password");
                commands.Enqueue("LOGIN tal.galmor@weka.io password1");
                RunClient("Elly", commands);
                bool log = false;
                foreach (Member m in _server.service.GetMembers().Values)
                    if (m.Email == "tal.galmor@weka.io" && m.LoggedIn)
                        log = true;
                
                if (log)
                    Console.WriteLine("-----------Didnt pass in test Login_wrong_password (144)----------");
                
                else
                    Console.WriteLine("Test Login_wrong_password passed");
                
            }
            public void Login_logout_and_login()
            {
                SetUp();
                lock (this)
                    StartSystem();
                
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER tal.galmor@weka.io tal galmor Aa112233");
                commands.Enqueue("LOGIN tal.galmor@weka.io Aa112233");
                commands.Enqueue("LOGOUT");
                RunClient("Womba", commands);
                bool log = false; 
                foreach (Member m in _server.service.GetMembers().Values)
                    if (m.Email == "tal.galmor@weka.io" && !m.LoggedIn)
                        log = true;
                
                if (!log)
                    Console.WriteLine("-----------Didnt pass in test Login_wrong_password (167)----------");
                
                commands = new Queue<string>();
                commands.Enqueue("LOGIN tal.galmor@weka.io Aa112233");
                RunClient("Womba2", commands);

                log = false; 
                foreach (Member m in _server.service.GetMembers().Values)
                    if (m.Email == "tal.galmor@weka.io" && m.LoggedIn)
                        log = true;
                
                if (!log)
                    Console.WriteLine("-----------Didnt pass in test Login_wrong_password (179)----------");
                
                else
                    Console.WriteLine("Test Login_logout_and_login passed");
            }
            private void Only_one_system_manager()
            {
                SetUp();
                lock (this)
                    StartSystem();
                
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER tal.galmor@BGU.io tal galmor Aa112233");
                commands.Enqueue("LOGIN tal.galmor@BGU.io Aa112233");
                commands.Enqueue("LOGOUT");
                RunClient("Terry", commands);
                int count = 0;
                int promotedCount = 0;
                foreach (Member m in _server.service.GetMembers().Values)
                {
                    if (m.Email.Contains("BGU"))
                        count++;
                    if (m.GetType() == typeof(PromotedMember))
                        promotedCount++;
                }
     
                if (count != 2 && promotedCount!=1)
                    Console.WriteLine("-----------Didnt pass in test Only_one_system_manager (272)----------");
                else
                    Console.WriteLine("Test Only_one_system_manager passed");
            }

            public void Open_store_test()
            {
                SetUp();
                lock (this)
                    StartSystem();
                OpenStore("Noga'SONY");
                bool log = false; 
                foreach (Store s in _server.service.GetStores().Values)
                    if (s.getName()=="Noga'SONY")
                        log = true;
                
                if (_server.service.GetStores().Count==0 || !log)
                    Console.WriteLine("-----------Didnt pass in test OpenStoreTest (196)----------");
                Console.WriteLine("OpenStoreTest passed");
            }

            public void Open_store_already_in()
            {
                SetUp();
                lock (this)
                    StartSystem();
                OpenStore("Noga'SONY");
                bool log = false; 
                foreach (Store s in _server.service.GetStores().Values)
                    if (s.getName()=="Noga'SONY")
                        log = true;
                
                if (_server.service.GetStores().Count==0 || !log)
                    Console.WriteLine("-----------Didnt pass in test Open_store_already_in (212)----------");
                
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("LOGIN noga@shwrz.io Aa213e");
                commands.Enqueue("CREATE-STORE Noga'SONY");
                int count = 0;
                foreach (Store s in _server.service.GetStores().Values)
                    if (s.getName() == "Noga'SONY")
                        count++;
                
                if (_server.service.GetStores().Count==2 || count != 1)
                    Console.WriteLine("-----------Didnt pass in test Open_store_already_in (223)----------");
                Console.WriteLine("Open_store_already_in passed");
            }
            public void Open_store_then_delete()
            {
                SetUp();
                lock (this)
                    StartSystem();
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER noga@shwrz.io noga shwartz Aa213e");
                commands.Enqueue("LOGIN noga@shwrz.io Aa213e");
                commands.Enqueue("CREATE-STORE New-Store-Of-Noga");
                RunClient("Noga", commands);
                Guid id = new Guid();
                foreach (Store s in _server.service.GetStores().Values)
                    if (s.getName() == "New-Store-Of-Noga")
                        id = s.StoreID;
                if (id.CompareTo(new Guid())==0)
                    Console.WriteLine("-----------Didnt pass in test Open_store_then_delete (245)----------");
                
                commands = new Queue<string>();
                commands.Enqueue("LOGIN noga@shwrz.io Aa213e");
                commands.Enqueue("DELETE-STORE " + id);
                RunClient("Noga", commands);
                bool log = false;
                foreach (Store s in _server.service.GetStores().Values)
                    if (s.getName() == "Noga'SONY")
                        log = true;
                if (_server.service.GetStores().Count==1 || log)
                    Console.WriteLine("-----------Didnt pass in test Open_store_then_delete (254)----------");
                Console.WriteLine("Open_store_then_delete passed");
            }
            public void Open_store_then_close_then_reopen()
            {
                SetUp();
                lock (this)
                    StartSystem();
                OpenStore("Noga'SONY");
                Guid id = new Guid();
                foreach (Store s in _server.service.GetStores().Values)
                    if (s.getName() == "New-Store-Of-Noga")
                        id = s.StoreID;
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("LOGIN noga@shwrz.io Aa213e");
                commands.Enqueue("CLOSE-STORE "+id);
                commands.Enqueue("REOPEN-STORE "+id);
                RunClient("Noga", commands);
                bool log = false;
                foreach (Store s in _server.service.GetStores().Values)
                    if (s.getName() == "Noga'SONY" && !s.Active)
                        log = true;
                if (_server.service.GetStores().Count==1 || log)
                    Console.WriteLine("-----------Didnt pass in test Open_store_then_close_then_reopen (277)----------");
                else
                    Console.WriteLine("Open_store_then_close_then_reopen passed");
            }
            
            private void Guest_get_info_stores_and_items_in()
            {
            }
            private void Member_update_profile_info()
            {
                SetUp();
                lock (this)
                    StartSystem();
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER net@cyprus.io neta barzily password1");
                RunClient("Neta", commands);
                commands = new Queue<string>();
                commands.Enqueue("LOGIN net@cyprus.io password1");
                commands.Enqueue("UPDATE FIRST netat LAST barzilay PASSWORD netaPass");
                RunClient("Neta", commands);
                PasswordHash _ph = new PasswordHash();
                bool log = false;
                foreach (Member m in _server.service.GetMembers().Values)
                    if(m.Email == "net@cyprus.io")
                        if (m.FirstName == "netat" && m.LastName == "barzilay" && _ph.Rehash("netaPass", m.Password))
                            log = true;
                if (!log)
                    Console.WriteLine("-----------Didnt pass in test Member_update_profile_info (395)----------");
                else
                    Console.WriteLine("Member_update_profile_info passed");
            }
            private void Member_update_security()
            {
                SetUp();
                lock (this)
                    StartSystem();
                Queue<string> commands = new Queue<string>();
                commands.Enqueue("REGISTER net@cyprus.io neta barzily password1");
                commands.Enqueue("LOGIN net@cyprus.io password1");
                commands.Enqueue("SECURITY Q what is you cat name A Titi");
                RunClient("Neta", commands);
                foreach (Member m in _server.service.GetMembers().Values)
                    if (m.Email == "net@cyprus.io")
                    {
                        if (m.SecurityQuestions.Count > 0)
                            Console.WriteLine("-----------Didnt pass in test Member_update_security (416)----------");
                        else
                            Console.WriteLine("Member_update_security passed");
                    }

            }

            private void Member_get_info_purchase_history()
            {
                throw new NotImplementedException();
            }

            private void Member_rating_item()
            {
                throw new NotImplementedException();
            }

            private void Member_get_info_stores_and_items_in()
            {
                throw new NotImplementedException();
            }

            private void Member_show_shopping_cart()
            {
                throw new NotImplementedException();
            }

            private void Member_save_items_on_cart()
            {
                throw new NotImplementedException();
            }

            private void Member_search_items_fail()
            {
                throw new NotImplementedException();
            }

            private void Member_search_items_success()
            {
                throw new NotImplementedException();
            }

            private void Guest_purchase_cart_success()
            {
                throw new NotImplementedException();
            }

            private void Guest_show_shopping_cart()
            {
                throw new NotImplementedException();
            }

            private void Guest_save_items_on_cart()
            {
                throw new NotImplementedException();
            }

            private void Guest_search_items_fail()
            {
                throw new NotImplementedException();
            }

            private void Guest_search_items_success()
            {
                throw new NotImplementedException();
            }
            private void Get_purchases_history_info()
            {
                throw new NotImplementedException();
            }

            private void Get_employees_info()
            {
                throw new NotImplementedException();
            }

            private void Member_send_msg_store()
            {
                throw new NotImplementedException();
            }

            private void Member_rating_store()
            {
                throw new NotImplementedException();
            }

            private void Member_review_store()
            {
                throw new NotImplementedException();
            }
            private void Member_purchase_same_items_same_time()
            {
                throw new NotImplementedException();
            }

            private void Member_purchase_cart_fail()
            {
                throw new NotImplementedException();
            }

            private void Member_purchase_cart_success()
            {
                throw new NotImplementedException();
            }

            private void Guest_purchase_same_items_same_time()
            {
                throw new NotImplementedException();
            }
                        private void Manager_change_premission_bad()
            {
                throw new NotImplementedException();
            }

            private void Manager_change_premission_good()
            {
                throw new NotImplementedException();
            }

            private void Manager_unappoint_illigel_store_manager()
            {
                throw new NotImplementedException();
            }

            private void Manager_appoint_store_manager()
            {
                throw new NotImplementedException();
            }

            private void Manager_unappoint_illigel_manager()
            {
                throw new NotImplementedException();
            }

            private void Manager_unappoint_self()
            {
                throw new NotImplementedException();
            }

            private void Manager_unappoint_manager()
            {
                throw new NotImplementedException();
            }

            private void Manager_appoint_self()
            {
                throw new NotImplementedException();
            }

            private void Manager_appoint_manager_appoint_manager()
            {
                throw new NotImplementedException();
            }

            private void Manager_appoint_manager()
            {
                throw new NotImplementedException();
            }

            private void Manager_change_bad_discount()
            {
                throw new NotImplementedException();
            }

            private void Manager_change_good_discount()
            {
                throw new NotImplementedException();
            }

            private void Manager_change_bad_policy()
            {
                throw new NotImplementedException();
            }

            private void Manager_change_good_policy()
            {
                throw new NotImplementedException();
            }

            private void Manager_show_inventory()
            {
                throw new NotImplementedException();
            }
        }
        
    }
}