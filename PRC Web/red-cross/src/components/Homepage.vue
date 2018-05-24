<template>
  <div class="welcome">
    <section id="quotation">
      <h1>Quotation</h1>
    </section>
    <section id="functions">
        <div class="row center-align">
            <h2>Functions by User Types</h2>
        </div>
        <div class="row">
            <div class="col s4">
                <ul>
                    <li><h4>Admin Supervisor</h4></li>
                    <li class="box">
                        <h5>Function #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, aperiam!</p>
                    </li>
                    <li class="box">
                        <h5>Function #n</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, aperiam!</p>
                    </li>
                </ul>
            </div>
            <div class="col s4">
                <ul>
                    <li><h4>Content Manager</h4></li>
                    <li class="box">
                        <h5>Function #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, aperiam!</p>
                    </li>
                    <li class="box">
                        <h5>Function #n</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, aperiam!</p>
                    </li>
                </ul>
            </div>
            <div class="col s4">
                <ul>
                    <li><h4>Blood Service Representative</h4></li>
                    <li class="box">
                        <h5>Function #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, aperiam!</p>
                    </li>
                    <li class="box">
                        <h5>Function #n</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, aperiam!</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "Welcome",
    data() {
        return {
            
        };
    },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#quotation {
    position: relative;
    height: 65vh;
    overflow: hidden;
    background-color: #f0f0f0;
    /* background-image: url('./assets/BG_Photo.png'); */
    background-size: cover;
    background-repeat: no-repeat;
}
#quotation h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
}

#functions {
    height: 35vh;
    overflow: hidden;
}

#functions .box {
    height: 10vh;
    overflow: hidden;
}

#functions .box + .box {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
}

#functions h2 {
    margin-top: 16px;
    margin-bottom: 0;
    font-size: 24px;
}

#functions h4 {
    margin-top: 8px;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
}

#functions h5 {
    font-size: 16px;
}

#functions p {
    font-size: 14px;
}
</style>
