const base = {
    get() {
        return {
            url : "http://localhost:8080/biyeshejichengjiguanli/",
            name: "biyeshejichengjiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/biyeshejichengjiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "毕业设计成绩管理系统"
        } 
    }
}
export default base
