<template>
  <div class="container">

    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto;
}
.container .content .logo{
  justify-content: center;
  align-content: center;
  display: flex;
}
.container .content{
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
}
.container .content .form form{
  justify-content: center;
  align-content: center;
  display: flex;
}
.container .content .info{
  padding: 20px;
  min-height: 100px;
  border: 1px solid #484848;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 130px ;
}
.container .content .info .info-content{
  border-bottom: 2px solid black ;
}
.container .content .info .info-content .country{
  font-size: 20px;
  font:bold;
  font-weight: 500;
}
.container .content .info .info-content .mute{
  font-size: 14px;
  color: #686868;
}
.container .content .info .info-content .mail{
  font-size: 20px;
  font:bold;
  font-weight: 500;
}
a{
  color: #666;
  text-decoration: none;
}
a:hover{
  color: #484848;
  cursor: pointer;
}
/* transition */
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
}

.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  opacity: 0;
  transition: 1s;
}
@keyframes slide-in{
  from{
    transform: translateY(-40px);
  }
  to{
    transform: translateY(0px);
  }
}
@keyframes slide-out{
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(-40px);
  }
}
</style>
