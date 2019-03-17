import React from 'react';
import { useOptionsHook } from '@hook';
import { FormItem } from '@components';
import { Card, Input, Select } from 'antd';
const { TextArea } = Input;

const useStateHook = (props) => {
  const tagOptionsHook = useOptionsHook({ model: 'Tag' });
  return { tagOptionsHook };
}

export default (props) => {
  const { tagOptionsHook } = useStateHook(props);
  return (
    <Card
      title="一般设置"
      className="block_first">
      
      <FormItem label="标题" length="3" required>
        {props.form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入文章标题' }],
        })(
          <Input placeholder="请输入文章标题"/>
        )}
      </FormItem>

      <FormItem label="标签" length="3">
        {props.form.getFieldDecorator('tags', {
        })(
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="请选择标签"
          >
            { tagOptionsHook.options }
          </Select>
        )}
      </FormItem>

      <FormItem label="概要" length="3">
        {props.form.getFieldDecorator('desc', {
        })(
          <TextArea autosize={{ minRows: 6, maxRows: 6 }} placeholder="请输入文章概要" />
        )}
      </FormItem>
    </Card>
  );
};
