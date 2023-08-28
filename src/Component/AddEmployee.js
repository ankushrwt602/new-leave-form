import Layout from "../Component/layoutComponent";
// import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
} from "antd";
// const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Layout />
      <section className="add_employee">
        <div className="container">
          <div className="add_employee_inner_frame">
            <Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
            >
              Form disabled
            </Checkbox>
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
                label="Email"
                name={["user", "email"]}
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

              <Form.Item
                label="Gender"
                name={["user", "radio"]}
                rules={[
                  {
                    type: "radio",
                    required: true,
                    message: "Please input the employee's Gender!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="female"> Female </Radio>
                  <Radio value="male"> Male </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Department"
                name={["user", "select"]}
                rules={[
                  {
                    type: "select",
                    required: true,
                    message: "Please input the employee's Department!",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="web">Web Developer</Select.Option>
                  <Select.Option value="ui">UI/Ux Designer</Select.Option>
                  <Select.Option value="digital">
                    Digital Marketer
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="D.O.B"
                name={["user", "d.o.b"]}
                rules={[
                  {
                    type: "datepicker",
                    required: true,
                    message: "Please input the employee's D.O.B!",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>

              <Form.Item
                label="Contact Number"
                name={["user", "number"]}
                rules={[
                  {
                    type: "number",
                    required: true,
                    message: "Please input the employee's Contact Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="City"
                name={["user", "city"]}
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
                name={["user", "state"]}
                rules={[
                  {
                    required: true,
                    message: "Please input the employee's State!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Address"
                name={["user", "address"]}
                rules={[
                  {
                    required: true,
                    message: "Please input the employee's Address!",
                  },
                ]}
              >
                <TextArea rows={3} />
              </Form.Item>

              <div className="employye_login_credentials">
                 <h2>Set Credentials for Employee Login</h2>
              </div>

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
                name={["user", "password"]}
                rules={[
                  {
                    type: "password",
                    required: true,
                    message: "Please input the employee's Username!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <div className="add_employee_btn">
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
          </div>
        </div>
      </section>
    </>
  );
};
export default () => <FormDisabledDemo />;
