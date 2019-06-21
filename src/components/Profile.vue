<template>
  <v-dialog max-width="800px">
   
    <v-btn large outline color="secondary" slot="activator"><span>Start</span></v-btn>
     
    <v-card>
      <v-card-title>
       <h1 class="primary--text">Let's Start</h1>
      </v-card-title>
        <v-card-text>
            <v-layout  align-start justify-end column>
            
            <p class="tertiary--text"> A resume is a snapshot of who you are and what you can bring to the table.
           <br />
             Let's Start by completing a profile with your information.
            <br />
            Be sure to list your LinkedIn Profile or any other personal websites you would like to make available on your resume.</p>
            </v-layout>
        
     
            <v-form class="px-3" ref="form">
               
                <v-text-field label="First Name" v-model="name" prepend-icon="person_pin" :rules="inputRules"></v-text-field>
                <v-text-field label="Last Name" v-model="name" prepend-icon="person_pin" :rules="inputRules"></v-text-field>
                <v-text-field label="Email" v-model="email" prepend-icon="email" ></v-text-field>
                <v-textarea label="Street Address" v-model="content" prepend-icon="home" :rules="inputRules"></v-textarea>
                <v-textarea label="Street Address" v-model="content" prepend-icon="city" :rules="inputRules"></v-textarea>
                <v-menu>
                  <v-text-field :value="due" slot="activator" label="Due Date" prepend-icon="date_range" :rules="inputRules"></v-text-field>  
                <v-date-picker v-model="due"></v-date-picker>
                </v-menu>            

              <v-spacer></v-spacer>


                <v-btn clat class="success mx-0 mt-3" @click="submit"> Add Project </v-btn>            
            </v-form>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>

export default {
    data(){
        return{
            title:'',
            content:'',
            due: null,
            inputRules:[
              v => v.length >= 3 || 'Minimum Length is 3 characters'
            ],
            loading: false
        }
    },
    methods:{
        

          }
           
        }
   


</script>
