
export function handleLogout(userID) {
    let url = "http://localhost:8080/api/member/logout";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID: userID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleOpenNewStore(userID , storeName) {
    let url = "http://localhost:8080/api/member/open-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID: userID,
            storeName: storeName,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleWriteItemReview(userID, itemID, review) {
    let url = "http://localhost:8080/api/member/write-item-review";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID: userID,
            itemID:itemID,
            review:review
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleGetItemReviews(itemID) {
    let url = "http://localhost:8080/api/member/item-reviews";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            itemID:itemID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}
export function handleAddItemStore(userID , storeID, itemName , itemCategory , itemPrice , quantity) {
    let url = "http://localhost:8080/api/member/add-item-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            itemName:itemName,
            itemCategory:itemCategory,
            itemPrice:itemPrice,
            quantity:quantity,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleRemoveItemStore(userID,storeID, itemID) {
    let url = "http://localhost:8080/api/member/rm-item-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            itemID:itemID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleEditItemStore(userID , storeID, itemID,itemName , itemCategory , itemPrice , quantity) {
    let url = "http://localhost:8080/api/member/edit-item-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            itemID:itemID,
            itemName:itemName,
            itemCategory:itemCategory,
            itemPrice:itemPrice,
            quantity:quantity,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleAppointStoreManager(userID, storeID, userEmail) {
    let url = "http://localhost:8080/api/member/appoint-store-manager";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            userEmail: userEmail
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleAddStoreManagerPermission(userID, storeID, userEmail , permission) {
    let url = "http://localhost:8080/api/member/add-store-manager-per";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            userEmail: userEmail,
            permission:permission
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleAppointStoreOwner(userID, storeID, userEmail ) {
    let url = "http://localhost:8080/api/member/appoint-store-owner";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            userEmail: userEmail,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleRemoveStoreManagerPermission(userID, storeID, userEmail, permission ) {
    let url = "http://localhost:8080/api/member/rm-store-per";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            userEmail: userEmail,
            permission:permission,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleRemoveStoreOwner(userID, storeID, userEmail ) {
    let url = "http://localhost:8080/api/member/rm-store-owner";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            userEmail: userEmail,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleCloseStore(userID, storeID ) {
    let url = "http://localhost:8080/api/member/close-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleEmployeesOfStore(userID, storeID ) {
    let url = "http://localhost:8080/api/member/get-employees";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleGetStorePurchases(userID, storeID ) {
    let url = "http://localhost:8080/api/member/get-store-purchases";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleDeleteStore(userID, storeID ) {
    let url = "http://localhost:8080/api/member/rm-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleUpdateFirstName(userID, field ) {
    let url = "http://localhost:8080/api/member/update-first";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            field: field,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleUpdateLastName(userID, field ) {
    let url = "http://localhost:8080/api/member/update-last";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            field: field,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleUpdatePassword(userID, password ) {
    let url = "http://localhost:8080/api/member/update-pass";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            password: password,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleSequrityQA(userID, q , a ) {
    let url = "http://localhost:8080/api/member/update-sqa";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            q: q,
            a: a,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleGetUsers(userID, q , a ) {
    let url = "http://localhost:8080/api/member/update-pass";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            q: q,
            a: a,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
// export function handleGetStores( ) {
//     let url = "http://localhost:8080/api/member/get-stores";

//     return fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//         })
//     }).then(async response => {
//         const data = await response.json();
//         if (!response.ok) {
//             return Promise.reject(data.error);
//         }
//         return Promise.resolve(data)
//     })
// }
//All employees that is store owners

// export function handleGetStoresOwners( ) {
//     let url = "http://localhost:8080/api/member/get-stores-owners";

//     return fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//         })
//     }).then(async response => {
//         const data = await response.json();
//         if (!response.ok) {
//             return Promise.reject(data.error);
//         }
//         return Promise.resolve(data)
//     })
// }

//All employees that is store owners in specific store
// export function handleGetStoresOwnersSpecificStore(storeID) {
//     let url = "http://localhost:8080/api/member/get-stores-owner";

//     return fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             storeID:storeID,
//         })
//     }).then(async response => {
//         const data = await response.json();
//         if (!response.ok) {
//             return Promise.reject(data.error);
//         }
//         return Promise.resolve(data)
//     })
// }

export function handleGetUserNotifications(UserID) {
    let url = "http://localhost:8080/api/member/get-notifications";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            UserID:UserID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}

export function handleMarkNotificationAsRead(UserID, notificationID) {
    let url = "http://localhost:8080/api/member/mark-notification-read";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            UserID: UserID,
            notificationID: notificationID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleGetAllPurchaseConditions(userId,storeID) {
    let url = "http://localhost:8080/api/member/get-conds";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId:userId,
            storeID:storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}
export function handleAddPurchaseCondition(userId,storeID , entity,entityName,type,value,op,opCond) {
    let url = "http://localhost:8080/api/member/add-cond";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId:userId,
            storeID:storeID,
            entity:entity,
            entityName:entityName,
            type:type,
            value:value,
            op:op,
            opCond:opCond,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleAddDiscountCondition(userId,storeID , entity,entityName,type,value,op,opCond) {
    let url = "http://localhost:8080/api/member/add-cond-dic";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId:userId,
            storeID:storeID,
            entity:entity,
            entityName:entityName,
            type:type,
            value:value,
            op:op,
            opCond:opCond,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleRemovePurchaseCondition(userID,storeID , condID) {
    let url = "http://localhost:8080/api/member/rm-cond";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID:storeID,
            condID:condID,

        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleCreateSimplePolicy(userId,storeID , level ,percent, startDate,endDate ) {
    let url = "http://localhost:8080/api/member/create-simple-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId:userId,
            storeID:storeID,
            level:level,
            percent:percent,
            startDate:startDate,
            endDate:endDate
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleCreateComplexPolicy(userId,storeID , op, policys) {
    let url = "http://localhost:8080/api/member/create-complex-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId:userId,
            storeID:storeID,
            op:op,
            policys:policys,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleAddPolicy(userID,storeID , discountPolicy) {
    let url = "http://localhost:8080/api/member/add-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID:storeID,
            discountPolicy:discountPolicy,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleRemovePolicy(userID,storeID , discountPolicy , type) {
    let url = "http://localhost:8080/api/member/rm-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID:storeID,
            discountPolicy:discountPolicy,
            type:type
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}


export function handleGetItems(userID,storeID) {
    let url = "http://localhost:8080/api/member/get-items";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID:storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}

export function handleGetAllPurchasesFromStore(userID , storeID) {
    let url = "http://localhost:8080/api/member/get-store-purchases";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID:storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}

export function handleGetPurchasesOfUser(userID) {
    let url = "http://localhost:8080/api/member/get-user-purchases";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            userIDToWatch:userID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}

export function handleGetMemberPermissions(userID) {
    let url = "http://localhost:8080/api/member/get-member-permissions";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}

export function handleGetStoreInfo(userID, storeID) {
    let url = "http://localhost:8080/api/member/get-store-info";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID:storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleCheckPurchaseConditions(userID) {
    let url = "http://localhost:8080/api/member/check-purchase-conds";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleGetAllPolicy(userID ,storeID) {
    let url = "http://localhost:8080/api/member/get-all-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID:storeID
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleGetMemberName(userID) {
    let url = "http://localhost:8080/api/member/get-member-name";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}
export function handleGetStoreRevenue(userID, storeID, date) {
    let url = "http://localhost:8080/api/member/get-store-revenue";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID: userID,
            storeID: storeID,
            date: date
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}

export function handleGetBidsInStore(userID, storeID) {
    let url = "http://localhost:8080/api/member/get-bids-in-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID: userID,
            storeID: storeID,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data.value)
    })
}
export function handleReactToBid(userID, itemID, bidResponse) {
    let url = "http://localhost:8080/api/member/react-to-bid";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID: userID,
            itemID: itemID,
            bidResponse: bidResponse,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}