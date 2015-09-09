/**
 * Created by apoorvaagrawal on 09/09/15.
 */
Router.configure({

    layoutTemplate:'appLayout'

});

Router.route('/',function(){

 this.render('Home',{
    data:function(){

        return true;

    }

 })

});