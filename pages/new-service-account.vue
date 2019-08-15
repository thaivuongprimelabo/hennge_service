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
                            <h1 class="font-medium mb-6 text-center text-2xl text-red-600">New Service Account</h1>
                            <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                                <div class="mb-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Client</label>
                                    <div class="relative">
                                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 mb-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="client_code">
                                            <option v-for="(client, index) in clients" :key="index" :value="client.client_code">{{ client.client_name }}</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Service</label>
                                    <div class="relative">
                                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 mb-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="service_code">
                                            <option v-for="(service, index) in services" :key="index" :value="service.service_code">{{ service.service_name }}</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Department</label>
                                    <div class="relative">
                                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 mb-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="department_code">
                                            <option v-for="(department, index) in departments" :key="index" :value="department.department_code">{{ department.department_name }}</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
                                    <div class="relative">
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="First Name" v-model="form.email">
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-4">
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            First Name (EN)
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" v-model="form.name_first_en">
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Last Name (EN)
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" v-model="form.name_last_en">
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-4">
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name-jp">
                                            First Name (JP)
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="ファーストネーム" v-model="form.name_first_jp">
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Last Name (JP)
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name-jp" type="text" placeholder="苗字" v-model="form.name_last_jp">
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <button @click="doRegister" class="bg-teal-400 hover:bg-teal-800  text-white font-bold py-2 px-4 rounded">
                                        OK
                                    </button>

                                    <button class="bg-pink-400 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded float-right">
                                        Cancel
                                    </button>
                                </div>
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
                email: '',
                password:'',
                serviceLogo:'',
                client_code: '',
                service_code: '',
                department_code: '',
                form : {
                    serviceaccount_id: '',
                    uuid: '',
                    name_first_en: '',
                    name_first_jp: '',
                    name_last_en: '',
                    name_last_jp: '',
                    password_is_temp: true,
                    num_of_times_logged: 0,
                    last_login: '',
                    is_active: false,
                    is_delete: false,
                    reg_date: '',
                    upd_date: '',
                    del_date: '',
                    email: ''
                },
                clients: [
                    {
                        client_id: 1,
                        client_code: 'plo',
                        client_name: 'Prime Labo'
                    },
                    {
                        client_id: 2,
                        client_code: 'hge',
                        client_name: 'Hengge'
                    }
                ],
                services: [
                    {
                        service_id: 1,
                        service_code: 'e',
                        service_name: 'Educations'
                    },
                    {
                        service_id: 2,
                        service_code: 'c',
                        service_name: 'Childcare'
                    },
                    {
                        service_id: 3,
                        service_code: 'h',
                        service_name: 'Health'
                    },
                ],
                departments: [
                    {
                        department_id: 1,
                        department_code: 's1',
                        department_name: 'Sapporo Odori High School'
                    },
                    {
                        department_id: 2,
                        department_code: 'h1',
                        department_name: 'Hokkaido Bifuka High School'
                    },
                    {
                        department_id: 3,
                        department_code: 'n1',
                        department_name: 'Niigata High School'
                    },
                    {
                        department_id: 4,
                        department_code: 'o1',
                        department_name: 'Osaka Ibaraki High School'
                    },
                    {
                        department_id: 4,
                        department_name: 'Hakuoh University'
                    }
                ]
                
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                this.serviceLogo = servicesLogo('xxx');
            },
            doRegister() {
                var _self = this;
                var passwordTemp = '!23456Abc';
                _self.form.serviceaccount_id = _self.service_code + _self.client_code + _self.department_code + 'b2';
                serviceAccount.doReigster(_self.form, passwordTemp, async function(status, message) {
                    if(status) {
                        alert(message);
                        _self.$router.replace('/login');
                    } else {
                        alert(message);
                    }
                });
            },
            generateToken(length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                
                for (var i = 0; i < length; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                
                return text;
            }
        }
    }
</script>