<template>
    <div>
        <h1>Service Account View</h1>
        <h3>Welcome! {{ userInfo.name_first_en }} {{ userInfo.name_last_en }}</h3>
        <a href="javascript:void(0)" @click="doLogout">Log out</a>
    </div>
</template>
<script>
    import serviceAccount from '@/src/serviceAccount';

    export default {
        middleware: 'auth',
        computed: {
            userInfo() {
                return this.$store.state.account.info;
            }
        },
        watch: {
            userInfo(newValue, oldValue) {
                return newValue;
            }
        },
        methods: {
            doLogout() {
                var _self = this;
                serviceAccount.doLogout(function(res) {
                    if(res.status) {
                        _self.$router.replace('/login');
                    }
                });
            }
        }
    }
</script>