import { PlusOutlined } from "@ant-design/icons";
import Layout from "../Component/layoutComponent";
import React, { useState } from "react";
import { Button, DatePicker, Radio, Form, Input, Select } from "antd";
const { TextArea } = Input;
const AddEmployee = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Layout />
      <section className="add_employye">
        {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          disabled={componentDisabled}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Full Name"
            name={["user", "name"]}
            rules={[
              {
                required: true,
                message: "Please input the employee's Full Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["email", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input the employee's Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Department">
            <Select>
              <Select.Option value="web">Web Developer</Select.Option>
              <Select.Option value="ui">UI/Ux Designer</Select.Option>
              <Select.Option value="digital">Digital Marketar</Select.Option>
            </Select>
            rules={[
              {
                type: "department",
                required: true,
                message: "Please input the employee's Department!",
              },
            ]}
          </Form.Item>

          <Form.Item label="Gender">
            <Radio.Group>
              <Radio value="female"> Female </Radio>
              <Radio value="male"> Male </Radio>
            </Radio.Group>
            rules={[
              {
                type: "radio",
                required: true,
                message: "Please input the employee's Gender!",
              },
            ]}
          </Form.Item>

          <Form.Item label="Date of Birth">
            <DatePicker />
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input the employee's D.O.B!",
              },
            ]}
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input the employee's Contact Number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name={["city", "city"]}
            rules={[
              {
                required: true,
                message: "Please input the employee's City!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="State"
            name={["state", "state"]}
            rules={[
              {
                required: true,
                message: "Please input the employee's State!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Address">
            <TextArea rows={3} />
            name={["address", "address"]}
            rules={[
              {
                required: true,
                message: "Please input the employee's Address!",
              },
            ]}
          </Form.Item>

          <h2>Set Credentials for Employee Login</h2>

          <Form.Item
            label="Username"
            name={["user", "name"]}
            rules={[
              {
                required: true,
                message: "Please input the employee's Username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name={["password", "password"]}
            rules={[
              {
                required: true,
                message: "Please input the employee's Password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <div className="addemployeebtn">
            <div className="buttons">
              <Form.Item>
                <Button className="marg-right">Proceed</Button>
              </Form.Item>
              <Form.Item>
                <Button className="cancel">Cancel</Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </section>
    </>
  );
};
export default AddEmployee;
