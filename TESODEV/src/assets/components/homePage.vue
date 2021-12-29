<template>

        <div class="content">
            <div class="logo mt-5">
                <img src="src/assets/image/tesodev.png" class="w-25" alt="" srcset="">
            </div>
            <div class="form mt-5">
                <form onsubmit="search()">
                    <input type="text" v-model="inpSearch" class="form-control w-50 border-dark" >
                    <button type="submit" class="btn btn-primary ml-3">Search</button>
                </form>
            </div>
            <div class="info mt-5 w-75">
                <div class="info-content pt-2">
                    <label class="country">Turkey-İstanbul <br>
                    <label class="mute">jane Done-2016</label>
                    </label>
                    <label class="mail float-right">Email: abc @xyz.com</label>
                </div>
                <div class="info-content pt-2">
                    <label class="country">Turkey-İstanbul <br>
                    <label class="mute">jane Done-2016</label>
                    </label>
                    <label class="mail float-right">Email: abc @xyz.com</label>
                </div>
                <div class="info-content pt-2">
                    <label class="country">Turkey-İstanbul <br>
                    <label class="mute">jane Done-2016</label>
                    </label>
                    <label class="mail float-right">Email: abc @xyz.com</label>
                </div>
                <a href="" class="more text-center mt-5"> 
                    <router-link to="/list" tag="label" >Show more...</router-link>
                </a>
            </div>
        </div>
        
</template>

<script>
export default {
    
}
</script>

<style lang="css">
    
</style>