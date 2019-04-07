<!--

    获取所有用户信息
    http://localhost:3000/users

    获取id为1的用用户
    http://localhost:3000/users/1
    
    获取年龄大于等于21的用户
    http://localhost:3000/users?age_gte=22
    
    获取年龄20-21的用户
    http://localhost:3000/users?age_gte=20&age_lte=21

    获取用户信息
    http://localhost:3000/users?q=hu



    获取所有公司信息
    http://localhost:3000/companies

    获取id为1的公司信息
    http://localhost:3000/companies/1

    获取隶属于公司id为1的用户
    http://localhost:3000/companies/1/users

    获取名字叫App的公司
    http://localhost:3000/companies?name=Apple

    根据多个名字获取公司信息
    http://localhost:3000/companies?name=Apple&name=Google

    获取一页中只有两条数据
    http://localhost:3000/companies?_page=1&_limit=2

    根据名字排序     _order=asc升序   desc降序
    http://localhost:3000/companies?_sort=name
 -->
