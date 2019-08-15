import serviceAccount from '@/src/serviceAccount.js';

export default function ({ store, redirect }) {
    if(localStorage.getItem('account_id') === undefined || localStorage.getItem('account_id') === null) {
        return redirect('/login')
    }

    var accountId = localStorage.getItem('account_id');
    serviceAccount.getAccountInfoById(accountId, function(res) {
        if(res.status) {
            console.log(res);
            store.commit('account/setAccountInfo', res.data);
        }
    });
}