import '@/assets/stylesheets/login.css';

import router from '../../router'
import axios from 'axios'



export default {
    name: 'Login',
    data() {
        return{
            login: {
                nome: "",
                senha: ""
            }
        }
    },

    methods: {
        entrar() {
            axios.post('http://192.168.4.92:8080/api/v1/jwt', this.login)
            .then(response => {
                let token =response.data.token;
            
            
            localStorage.setItem('token', token);

              if(token != null) {
                console.log("oi");
                router.push({ name: "Home"});
            } else {
                console.log("erro")
            }
            }
            ).catch(respone => {
                console.log("erro")
            })

          
            //  router.push({ name: "Home" });


            

        }

    }
}  