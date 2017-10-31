;(function () {
    'use strict';

    new Vue({
        el: '#root',
        data: {
            new_user: {},
            user_list: [],
            success_list: []
        },
        methods: {
            add_user: function () {
                if (this.new_user.key !== 't') {
                    this.new_user['fasl'] = 'tre';
                    this.user_list.push(Object.assign({}, this.new_user));
                    this.new_user = {};
                } else {
                    this.new_user = {};
                }

            },
            del: function (index,t) {
                console.log(t);
                 if(t==="a"){
                     this.success_list.splice(index,1);
                     return;
                 }
                 if(t==="b"){
                     this.user_list.splice(index, 1);
                     return;
                 }


            },
            updata: function (index,o) {
                if(o==='e'){
                    this.new_user = this.user_list[index];
                    this.new_user['key'] = 't';
                }
                if(o==='c'){
                    this.new_user=this.success_list[index];
                    this.new_user['key'] = 't';
                }
            },
            suc: function (index) {
                if (this.user_list[index].fasl === 'tre') {
                    this.user_list[index].fasl = 'false';
                    this.success_list.push(Object.assign({}, this.user_list[index]));
                    this.user_list.splice(index, 1);
                    return;
                }
            },
            sucr:function (index) {
                if(this.success_list[index].fasl==='false'){
                    this.success_list[index].fasl='tre';
                    this.user_list.push(Object.assign({},this.success_list[index]));
                    //  又还原回去的样子
                    console.log(this.user_list);
                    this.success_list.splice(index,1);
                    return;
                }
            }

        }
    })
})();