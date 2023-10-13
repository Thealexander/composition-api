<template>
     <ul>
      <!-- <li v-for="user in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        
        <h6>{{ email }}</h6> 
      </li>-->
<slot v-for="user in users"
            :user="user"
            :key="user.id">

</slot>

    </ul>
</template>

<script>
export default {

    props:{
        users:{
            type:Array,
            required:true
        }
    }

}
</script>

<style scoped>

ul{
    list-style:none
}

</style>