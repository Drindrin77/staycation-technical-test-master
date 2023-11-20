import { Button, Form, Radio } from "antd";
import React from "react";
import Flex from "ui/flex";

interface BookFormProps {
  bookableDays: Date[];
  onFinish: (values: { date: Date }) => void;
}

const BookForm: React.FC<BookFormProps> = ({ bookableDays, onFinish }) => {
  return (
    <Flex>
      <Flex direction="vertical">
        <Form onFinish={onFinish}>
          <Form.Item name="date" required={true}>
            <Radio.Group>
              {bookableDays.map((bookableDay) => {
                return (
                  <Radio value={bookableDay.toString()}>
                    {bookableDay.toString()}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Book
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};

export default BookForm;
