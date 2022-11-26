import React, { FC } from 'react';
import Input from 'components/ui/input';
import MaskedInput, { Props } from 'react-input-mask';

const CustomMaskedInput: FC<Props> = (props) => (
  <MaskedInput {...props}>
    <Input {...props} />
  </MaskedInput>
);

export default CustomMaskedInput;
