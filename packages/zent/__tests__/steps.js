import React from 'react';
import { mount } from 'enzyme';
import Steps from 'steps';

const Step = Steps.Step;

describe('Steps', () => {
  it('requires title', () => {
    const wrapper = mount(
      <Steps>
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Steps>
    );
    expect(wrapper.find('Steps').length).toBe(1);
    expect(wrapper.find('NumberSteps').length).toBe(1);
    expect(wrapper.find('Step').length).toBe(3);
  });

  it('custom className and prefix', () => {
    const wrapper = mount(
      <Steps className="custom-steps" prefix="django">
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Steps>
    );
    expect(wrapper.find('.custom-steps.django-steps').length).toBe(1);
  });

  it('current step', () => {
    const ensure = current => {
      current = current || 1;
      const wrapper = mount(
        <Steps current={current}>
          <Step title="第一步" />
          <Step title="第二步" />
          <Step title="第三步" />
        </Steps>
      );
      expect(wrapper.find('.zent-steps-item.is-current').length).toBe(1);
    };
    ensure();
    ensure(1);
    ensure(2);
    ensure(3);
  });

  it('step status', () => {
    const ensure = status => {
      const wrapper = mount(
        <Steps status={status} current={1}>
          <Step title="第一步" />
          <Step title="第二步" />
          <Step title="第三步" />
        </Steps>
      );
      status = status || 'finish';
      expect(
        wrapper
          .find('.zent-steps-item')
          .first()
          .hasClass(`zent-steps-status-${status}`)
      ).toBe(true);
    };
    ensure();
    ensure('finish');
    ensure('error');
  });

  it('breadcrumb steps', () => {
    const wrapper = mount(
      <Steps type="breadcrumb">
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Steps>
    );
    expect(wrapper.find('.zent-steps-breadcrumb').length).toBe(1);
  });

  it('card steps', () => {
    const wrapper = mount(
      <Steps type="card">
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Steps>
    );
    expect(wrapper.find('.zent-steps-card').length).toBe(1);
  });
});
