import React from 'react';
import { Form, Input, Button } from 'antd';

import { useFormik } from 'formik';

const AntDesignForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', // Dikey yönde bir sıralama için
      justifyContent: 'center', 
      alignItems: 'center', 
      height: 'auto',
      border: '2px solid #000', // Siyah kenar
      borderRadius: '8px',
      padding: '20px',
      marginTop:'15px'
      
    }}>
      <h2 style={{ marginBottom: '20px' }}>LOGIN</h2> {/* LOGIN yazısı */}
      <Form onFinish={formik.handleSubmit} style={{ width: '300px' }}>
        <Form.Item label="Ad" name="firstName" rules={[{ required: true, message: 'Lütfen adınızı girin' }]}>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </Form.Item>

        <Form.Item label="Soyad" name="lastName" rules={[{ required: true, message: 'Lütfen soyadınızı girin' }]}>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Lütfen emailinizi girin' }]}>
          <Input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntDesignForm;
// import Bildirileri: Gerekli bileşenleri ve kütüphaneleri içeri alır.
    // useFormik Hook Kullanımı: useFormik hook'u, form state ve fonksiyonlarını sağlar.
    // <div> ile Sayfanın Ortasına Hizalama: display: 'flex', justifyContent: 'center', alignItems: 'center' kullanılarak sayfa içindeki içeriğin dikey ve yatayda ortalanması sağlanır.
    // <Form> Bileşeni: Ant Design'in Form bileşeni, formun temel bileşenidir. onFinish özelliği ile form gönderildiğinde çalışacak fonksiyon belirlenir.
    // <Form.Item> Bileşenleri: Form içindeki her bir input elemanının ve etiketinin bulunduğu bileşenlerdir. rules özelliği ile zorunlu alanlar ve diğer kısıtlamalar belirlenir.
    // <Input> Bileşenleri: Ant Design'in Input bileşenleri, kullanıcıdan veri almak için kullanılır.
    // <Button> Bileşeni: Formu göndermek için kullanılan buton. htmlType="submit" ile formu gönderme işlemini tetikler. style özelliği ile butonun genişliği ayarlanır.
    // style Özellikleri: CSS inline stil özellikleri kullanılarak sayfanın ortalanması, formun genişliği ve butonun genişliği gibi özellikler belirlenir.