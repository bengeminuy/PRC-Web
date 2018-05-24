<template>
  <div class="welcome">
    <section id="quotation">
        <img src="../assets/BG_Photo.png" alt="" class="responsive-img">
      <h1>Quotation</h1>
    </section>
    <section id="functions">
        <h2>Functions by User Types</h2>
        <div class="row" id="user-types">
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
}

#quotation img {
    width: 100%;
}

#quotation h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    color: #fff;
}

#functions {
    margin-left: 10%;
    margin-right: 10%;
    height: 35vh;
    overflow: hidden;
}

#functions .box {
    height: 12vh;
    overflow: hidden;
}

#functions .box + .box {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
}

#functions h2 {
    margin: 0;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
    font-size: 24px;
}

#user-types {
    height: 30vh;
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
    position: relative;
    margin: 8px 0;
    font-size: 14px;
}

#functions p::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    user-select: none;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))
}
</style>
