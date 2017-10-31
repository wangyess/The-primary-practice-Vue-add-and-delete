;(function () {
    'use strict';
    var courrt = 0;
    //写vue
    new Vue({
        el: '#root',
        data: {
            //  要定义一个对象去接受页面的值
            new_list: {},
            // 在定一个数组 把获取到的值放到数组中 之后遍历到页面上
            task_list: [],
            success_task: []
        },
        //这里是页面调用的函数方法   写在这里 不要问为什么  语法懂吗?
        methods: {
            add_task: function () {
                //把 对象加到 数组中   一定要加  this 如果不加他是访问不到的  会返回未定义
                if (this.new_list.key !== 'k') {
                    courrt++;
                    this.new_list['id'] = courrt;
                    this.new_list['suces'] = 'false';
                    this.task_list.push(Object.assign({}, this.new_list));
                    this.new_list = {};
                } else {
                    this.new_list = {};
                }

            },
            del: function (index, d) {
                if (d === 'a') {
                    this.task_list.splice(index, 1);
                }
                if (d === 'b') {
                    this.success_task.splice(index, 1);
                }
            },
            updata: function (index, e) {
                if (e === 'f') {
                    this.new_list = this.task_list[index];
                    //这里需要标记一下 因为 这个是前后同步的  所有标记一下 如果有标记就不需要重新添加
                    this.new_list['key'] = 'k';
                }
                if (e === 'g') {
                    this.new_list = this.success_task[index];
                    this.new_list['key'] = 'k';
                }
            },
            success__task: function (index, p) {
                if (p === 'm') {
                    this.task_list[index].suces = 'true';
                    this.success_task.push(Object.assign({}, this.task_list[index]));
                    this.task_list.splice(index, 1);
                    return;
                }
                if (p === 'n') {
                    this.success_task[index].suces = 'false';
                    this.task_list.push(Object.assign({}, this.success_task[index]));
                    this.success_task.splice(index, 1);
                    return;
                }

                // if (this.task_list[index].suces === 'false') {
                //     this.task_list[index].suces = 'true';
                //     this.success_task.push(Object.assign({}, this.task_list[index]));
                //     this.task_list.splice(index, 1);
                //     return;
                // }
            },
            // success___task: function (index) {
            //     if (this.success_task[index].suces === 'true') {
            //         this.success_task[index].suces = 'false';
            //         this.task_list.push(Object.assign({}, this.success_task[index]));
            //         this.success_task.splice(index, 1);
            //         return;
            //     }
            // }

        }
    })
})();