<template>
    <div class="h-screen flex w-full bg-img"> 
        <div class="flex flex-wrap p-5 w-full md:w-3/4 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <div class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg p-5">
                <img @click="goTo" class="w-1/2 mx-auto cursor-pointer" src="/images/logos/education-vertical-png.png" >
            </div>
            <div class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg p-5">
                <img @click="childCare" class="w-1/2 mx-auto cursor-pointer" src="/images/logos/childcare-vertical-png.png"  >
            </div>
            <div class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg p-5">
                <img class="w-1/2 mx-auto cursor-pointer" src="/images/logos/health-vertical-png.png"  >
            </div>
            <div class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg p-5">
                <img class="w-1/2 mx-auto cursor-pointer" src="/images/logos/policy-vertical-png.png" >
            </div>
        </div>
    </div>
</template>

<script>
    import servicesLogo from '@/functions/servicesLogo.js';
    export default {
        data () {
            return { 
                isWrong:true,
                email: '',
                password:'',
                serviceLogo:'',
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
                this.isWrong = false;
            },
            goTo() {
                document.location = '/login?service_id=dg8UtFmRn9Za';
            },
            childCare() {
                document.location = '/login?service_id=WTbTcsX9VGp0';
            }
        }
    }
</script>