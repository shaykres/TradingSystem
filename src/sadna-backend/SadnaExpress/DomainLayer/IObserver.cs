﻿using System;

namespace SadnaExpress.DomainLayer
{
    public interface IObserver
    {
        void Update(Notification notification);
    }
}