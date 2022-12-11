function helo(name,a){
        this.name=name
        this.a=a
     }
     helo.prototype={
        display:function(x){
            console.log(`my name is ${this.name} and ${this.a} and ${x}`)
        }
     }
     function work(city){
        this.city=city
     }
     work.prototype={
        display1:function(){
            console.log(`i am from ${this.city}`)
        }
     }
     function state(b){
        this.state=b
     }
    state.prototype={
        display2:function(){
            console.log(`State: ${this.state}`)
        }
     }
     
     function result(name,a,city,b){
          helo.call(this,name,a)
          work.call(this,city)
          state.call(this,b)
     }
     result.prototype=Object.create(helo.prototype)
    //  result.prototype=Object.create(work.prototype)
     Object.assign(result.prototype,work.prototype)
     Object.assign(result.prototype,state.prototype)
     
     let b=new result('Raghavm',1,'chennai','tamilnadu')
     b.display(10)
     b.display1()
     b.display2()
