/**
 * @name 模型对象 和数据表头一一对应
 * @author 欧阳浩
 * @version 1.0
 * @description 
 */

class Stu_h1802 {
    constructor(s_id, s_name, s_sex, s_age, s_qq, s_school, s_major, s_education) {
        this.s_id = s_id || "学号";
        this.s_name = s_name || "姓名";
        this.s_sex = s_sex || "性别";
        this.s_age = s_age || "年龄";
        this.s_qq = s_qq || "QQ";
        this.s_school = s_school || "学校";
        this.s_major = s_major || "专业";
        this.s_education = s_education || "学历";
    }
}


module.exports = Stu_h1802;