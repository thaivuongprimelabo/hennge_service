<template>
    <div class="h-screen flex w-full bg-img"> 
        <div class="p-5 w-full md:w-3/4 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <div class="flex flex-row bg-gray-200">
                <div class="hidden lg:block text-gray-700 w-1/2 text-center self-center">
                    <img class="w-1/2 mx-auto" v-bind:src="serviceLogo"/>
                </div>
                <div class="text-gray-700 w-full lg:w-1/2">
                     <div class="container mx-auto h-full flex justify-center items-center">
                        <div class="m-3 w-full">
                            <h1 class="font-medium mb-6 text-center text-2xl text-red-600">Login to Hennge Chromo</h1>
                            <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                                <div class="mb-4">
                                    <label class="font-bold text-grey-darker block mb-2 henghe-text">Account</label>
                                    <input 
                                        type="text" 
                                        v-model="form.email"
                                        class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" 
                                        placeholder="Your Email">
                                </div>

                                <div class="mb-4">
                                    <label class="font-bold text-grey-darker block mb-2">Password</label>
                                    <input 
                                        type="password" 
                                        v-model="form.password"
                                        class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" 
                                        placeholder="Your Password">
                                        <p v-bind:class="{ hidden : isWrong }" class="text-red-500 text-xs italic">Incorrect username or password !</p>
                                </div>

                                <div class="flex items-center justify-between">
                                    <button @click="doLogin" class="bg-teal-400 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
                                        Login
                                    </button>

                                    <a class="no-underline inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-dark float-right" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                                
                            </div>
                            <div class="text-center">
                                <p class="text-grey-dark text-sm">Don't have an account? <nuxt-link to="/new-service-account" class="no-underline text-blue-600 font-bold">Create an Account</nuxt-link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import serviceAccount from '@/src/serviceAccount.js';
    import servicesLogo from '@/functions/servicesLogo.js';

    export default {
        data () {
            return { 
                isWrong:true,
                form: {
                    email: '',
                    password:'',
                },
                serviceLogo:''
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                this.serviceLogo = servicesLogo(this.$route.query.service_id);
            },
            doLogin() {
                var _self = this;
                serviceAccount.doLogin(_self.form, function(res) {
                    if(res.status) {
                        _self.$router.replace('/dashboard');
                    } else {
                        alert(res.error);
                    }
                })
            }
        }
    }
</script>