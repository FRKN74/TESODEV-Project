<template>
        <div class="row mt-5">
            <div class="col-md-2">
                <img src="src/assets/image/tesodev.png" class="w-100" alt="" srcset="">
            </div>
            <div class="col-md-6">
                <div class="form">
                    <input type="text" class="form-control w-100 border-dark" >
                </div>
                    <div class="info mt-5 w-100">
                        <div class="order float-right">
                            <span>
                                <ul>
                                    <li>
                                        <input type="checkbox" id="kontrol">
                                        <i class="fas fa-filter mr-1"></i> 
                                        <label for="kontrol" class="orderBy">Order By</label> 
                                        <ul>
                                            <li class="orders">Kategor-1</li>
                                            <li class="orders">Kategor-1</li>
                                            <li class="orders">Kategor-1</li>
                                            <li class="orders">Kategor-1</li>
                                        </ul>
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <br><br>
                        <div class="info-content pt-2">
                            <label class="country">Turkey-İstanbul <br>
                            <label class="mute">jane Done-2016</label>
                            </label>
                            <label class="mail float-right">Email: abc @xyz.com</label>
                            <hr>
                        </div>
                        <div class="info-content pt-2">
                            <label class="country">Turkey-İstanbul <br>
                            <label class="mute">jane Done-2016</label>
                            </label>
                            <label class="mail float-right">Email: abc @xyz.com</label>
                            <hr>
                        </div>
                        <div class="info-content pt-2">
                            <label class="country">Turkey-İstanbul <br>
                            <label class="mute">jane Done-2016</label>
                            </label>
                            <label class="mail float-right">Email: abc @xyz.com</label>
                            <hr>
                        </div>
                        <div class="info-content pt-2">
                            <label class="country">Turkey-İstanbul <br>
                            <label class="mute">jane Done-2016</label>
                            </label>
                            <label class="mail float-right">Email: abc @xyz.com</label>
                            <hr>
                        </div>
                        <div class="info-content pt-2">
                            <label class="country">Turkey-İstanbul <br>
                            <label class="mute">jane Done-2016</label>
                            </label>
                            <label class="mail float-right">Email: abc @xyz.com</label>
                            <hr>
                        </div>
                    </div>
            </div>
            <div class="col-md-2">
                <button class="btn btn-primary ml-3 w-100">Search</button>
            </div>
        </div>
        
</template>

<script>
export default {
    
}
</script>

<style lang="css">

.info-content{
    transition: 1s;
    border-radius: 10px;
    padding: 10px;
}
input[type="checkbox"]{
    display: none;
}
.info-content:hover{
    background-color: #C4C4C4;
    transition: 250ms;
}
.info .order span ul li .orderBy:hover{
    cursor: pointer;
}
ul li{
    list-style-type: none;
    
}
ul li #kontrol:checked~ul{
    opacity: 1;
    visibility: visible;
    margin-left: 90px;

    
}
ul li ul:hover{
    visibility: visible;
}
ul li ul {
    position: absolute;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
    min-width: 150px;
    margin-left: 50px;
    border-radius: 10px;
    font-weight: 600;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: 250ms all;
}
ul li ul .orders:hover {
    cursor: pointer;
}
ul  li  ul li{
    border-bottom: 1px solid grey;
    padding: 5px;

}
ul  li  ul li:hover{
    background-color: grey;
}

.info-content:hover .country .mute{

    color: white;
    transition: 250ms;
}


.info .info-content .country{
    font-size: 20px;
    font:bold;
    font-weight: 500;
}
.info .info-content .mute{
    font-size: 14px;
    color: #686868;
    transition: 25ms;

}
.info .info-content .mail{
    font-size: 20px;
    font:bold;
    font-weight: 500;
}
@media (max-width:952px){
    ul li ul {
        margin-left: -60px;
    }
}
@media (max-width:800){
    ul li ul {
        margin-left: -50px;
        
    }
}
</style>