import { Modal ,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView  } from 'react-native';
import React, { useCallback, useState } from 'react';

import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import * as S from './styles';
import * as Yup from "yup";
import { ProgressBar } from '../ProgressBar';
import Button from '../Button';

interface StepModalProps {
  schema: Yup.ObjectSchema<FieldValues>
  onSubmit:SubmitHandler<FieldValues>
  steps: React.ElementType[]
}

export default function StepModal({schema ,onSubmit, steps }: StepModalProps) {
  
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm({
    resolver: yupResolver(schema)
  });

  const { control, handleSubmit, formState: { errors } } = methods;

  const componentElement = steps.map((Component, index) => <Component key={index} control={control} methods={methods} errors={errors} />)

  const handleBack = () => {
    if (currentStep === 1) return
    setCurrentStep(currentStep - 1)
  };

  const handleNext = useCallback(() => {
    if(currentStep == steps.length ) return
    setCurrentStep((currentStep) => currentStep + 1)
  }, []);
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView enabled > 
          <S.Root.Wrapper style={{
            shadowColor: 'black',
            shadowOpacity: 0.9,

          }}>
            <ProgressBar total={steps.length}  current={currentStep}/>
            {componentElement[currentStep  - 1]}
            {currentStep > 1 &&
              <Button text="Voltar" type='PRIMARY' onPress={handleBack} />
            }
            {currentStep != steps.length &&
              <Button text="Próximo"  type='PRIMARY' onPress={handleNext} />
            }
            {currentStep == steps.length &&
              <Button text="Enviar"  type='PRIMARY' onPress={handleSubmit(onSubmit)} />
            }
          </S.Root.Wrapper>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}