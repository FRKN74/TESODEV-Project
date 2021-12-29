<template>
    <div class="row mt-5">
        <div class="col-md-6 input-content">
            <label class="lbl-1 mb-5">İnput</label>
            <br>
                <label class="lbl-1 ">Default</label>
                <input type="text" class="form-control border-dark" placeholder="Placeholder...">
                <label class="text">Label</label>
            <br>
                <label class="lbl-1"> Hover</label>
                <input type="text" class="form-control border-secondary" placeholder="Placeholder...">
                <label class="text">Label</label>
            <br>
                <label class="lbl-1">Error</label>
                <input type="text" class="form-control border-danger" placeholder="Placeholder...">
                <label class="text">Error</label>
        </div>
        <div class="col-md-5 ml-5">
            <label class="lbl-1 mb-5">Button</label>
            <br>
            <button class="btn btn-primary mb-5">Button Text</button>
            <br>
            <button class="btn btn-info mt-5 ">Button Text</button>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

.lbl-1{
font:600;
font-size: 20px;
}
.text{
    font-size: 12px;
}
.text:nth-child(1){
    color: grey;
}
.text:last-child{
    color: red;
}


</style>