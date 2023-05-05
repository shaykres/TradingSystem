
export function handleLogout(userID) {
    let url = "http://localhost:8080/member/guest/logout";

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
    let url = "http://localhost:8080/api/guest/open-store";

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
export function handleWriteItemReview(userID, storeID, itemID, review) {
    let url = "http://localhost:8080/api/member/write-item-review";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID: userID,
            storeID: storeID,
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
export function handleGetItemReviews(storeID, itemID) {
    let url = "http://localhost:8080/api/member/item-reviews";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
export function handleAddItemStore(userID , storeID, itemName , itemCategory , itemPrice , quantity) {
    let url = "http://localhost:8080/api/member/add-item-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            itemID:itemName,
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
export function handleEditItemStore(userID , storeID, itemName , itemCategory , itemPrice , quantity) {
    let url = "http://localhost:8080/api/member/edit-item-store";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            itemID:itemName,
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
export function handleAppointStoreManagerPremission(userID, storeID, userEmail , premissions) {
    let url = "http://localhost:8080/api/member/appoint-store-manager-per";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID:userID,
            storeID: storeID,
            userEmail: userEmail,
            premissions:premissions
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

export function handleRemoveStoreManagerPer(userID, storeID, userEmail, premissions ) {
    let url = "http://localhost:8080/api/member/rm-store-manager-per";

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
export function handleGetStores( ) {
    let url = "http://localhost:8080/api/member/get-stores";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
//All employees that is store owners
export function handleGetStoresOwners( ) {
    let url = "http://localhost:8080/api/member/get-stores-owners";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
//All employees that is store owners in specific store
export function handleGetStoresOwnersSpecificStore(storeId) {
    let url = "http://localhost:8080/api/member/get-stores-owner";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            storeId:storeId,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}


export function handleGetUser(UserID) {
    let url = "http://localhost:8080/api/member/get-user";

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
        return Promise.resolve(data)
    })
}
export function handleGetMember(UserID) {
    let url = "http://localhost:8080/api/member/get-user";

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
        return Promise.resolve(data)
    })
}


export function handleGetUserNotification(UserID) {
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
        return Promise.resolve(data)
    })
}
export function handleGetAllPurchaseConditions(storeID) {
    let url = "http://localhost:8080/api/member/get-conds";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
export function handleGetPurchaseCondition(storeID , entity , type, value , dt=null , entiryRes=null , typeRes=null , valueRes=null) {
    let url = "http://localhost:8080/api/member/get-cond";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            storeID:storeID,
            entity:entity,
            type:type,
            value:value,
            dt:dt,
            entiryRes: entiryRes,
            typeRes:typeRes,
            valueRes:valueRes,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleAddPurchaseConditions(storeID , entity , type, value , dt=null , entiryRes=null , typeRes=null , valueRes=null) {
    let url = "http://localhost:8080/api/member/add-cond";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            storeID:storeID,
            entity:entity,
            type:type,
            value:value,
            dt:dt,
            entiryRes: entiryRes,
            typeRes:typeRes,
            valueRes:valueRes,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleRemovePurchaseCondition(storeID , entity , type, value , dt=null , entiryRes=null , typeRes=null , valueRes=null) {
    let url = "http://localhost:8080/api/member/rm-cond";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            storeID:storeID,
            entity:entity,
            type:type,
            value:value,
            dt:dt,
            entiryRes: entiryRes,
            typeRes:typeRes,
            valueRes:valueRes,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleAddDiscountCondition(storeID , entity , type, value ) {
    let url = "http://localhost:8080/api/member/add-discount-cond";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            storeID:storeID,
            entity:entity,
            type:type,
            value:value,
        })
    }).then(async response => {
        const data = await response.json();
        if (!response.ok) {
            return Promise.reject(data.error);
        }
        return Promise.resolve(data)
    })
}
export function handleCreateSimplePolicy(storeID , level ,percent, startDate,endDate ) {
    let url = "http://localhost:8080/api/member/create-simple-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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

export function handleCreateComplexPolicy(storeID , op, policys) {
    let url = "http://localhost:8080/api/member/create-complex-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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

export function handleAddPolicy(storeID , discountPolicy) {
    let url = "http://localhost:8080/api/member/add-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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

export function handleRemovePolicy(storeID , discountPolicy) {
    let url = "http://localhost:8080/api/member/rm-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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


export function handlegetItems(storeID) {
    let url = "http://localhost:8080/api/member/rm-policy";

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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