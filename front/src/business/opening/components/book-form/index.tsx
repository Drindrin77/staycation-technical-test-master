import { Button, Form, Radio } from "antd";
import React from "react";
import { formatDate } from "technical/date";
import Flex from "ui/flex";

interface BookFormProps {
  bookableDays: Date[];
  onFinish: (values: { date: Date }) => void;
}

const BookForm: React.FC<BookFormProps> = ({ bookableDays, onFinish }) => {
  const [form] = Form.useForm<{ date: Date }>();

  const selectedDate = Form.useWatch("date", form);

  return (
    <Flex>
      <Flex direction="vertical">
        <Form onFinish={onFinish} form={form}>
          <Form.Item
            name="date"
            rules={[
              { required: true, message: "Veuillez sélectionner une date" },
            ]}
          >
            <Radio.Group>
              {bookableDays.map((bookableDay) => {
                return (
                  <Radio value={bookableDay.toString()}>
                    {formatDate(new Date(bookableDay))}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Form.Item>
          <Form.Item shouldUpdate>
            <Button type="primary" htmlType="submit" disabled={!selectedDate}>
              Book
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};

export default BookForm;
