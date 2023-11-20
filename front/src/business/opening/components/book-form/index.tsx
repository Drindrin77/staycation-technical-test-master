import { Button, Form, Radio } from "antd";
import React from "react";
import { formatDate } from "technical/date";
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
                    {formatDate(new Date(bookableDay))}
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
