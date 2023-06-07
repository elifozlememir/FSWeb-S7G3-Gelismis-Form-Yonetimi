
import * as  Yup from 'yup'

export  const formSc=Yup.object().shape({
    name: Yup
            .string()
            .trim()
            .required(" Lütfen isim giriniz!")
            .min(3," İsminizi tam giriniz"),

    lastname: Yup
            .string()
            .trim()
            .required(" Lütfen isim giriniz!")
            .min(3," Soyadınızı tam giriniz"),

    email:Yup
            .string()
            .email(" Lütfen geçeli bir adresi giriniz.")
            .required(" Lütfen bir email adresi giriniz"),

    password:Yup
            .string()
            .required(" Lüften password oluşturunuz")
            .min(8," en az 8 karakter olmalı"),
    terms:Yup
        .boolean()
        .oneOf([true]," onay olmalı")
           
})

