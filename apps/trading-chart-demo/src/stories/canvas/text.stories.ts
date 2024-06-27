import { Meta, StoryObj } from '@storybook/html';
import {
  CreateCanvasInput,
  createCanvas,
  decoratorPadding,
  drawDot,
} from '../../storybook-utils';
import {
  BoxedTextParameters,
  LIST_OF_CANVAS_TEXT_ALIGNS,
  LIST_OF_CANVAS_TEXT_BASELINES,
  LIST_OF_FONT_FAMILIES,
  TextParameters,
  drawText,
} from '@gmjs/trading-chart';

const STORY_META: Meta<TextParameters> = {
  title: 'Canvas/Text',
  tags: [],
  decorators: [decoratorPadding(document, '16px')],
  argTypes: {
    fontFamily: {
      control: 'inline-radio',
      options: LIST_OF_FONT_FAMILIES,
    },
    color: {
      control: 'color',
    },
    textAlign: {
      control: 'inline-radio',
      options: LIST_OF_CANVAS_TEXT_ALIGNS,
    },
    textBaseline: {
      control: 'inline-radio',
      options: LIST_OF_CANVAS_TEXT_BASELINES,
    },
  },
  args: {},
};
export default STORY_META;

export const Primary: StoryObj<BoxedTextParameters> = {
  render: (args: BoxedTextParameters): HTMLElement => {
    const container = document.createElement('div');

    const canvasInput: CreateCanvasInput = {
      width: 600,
      height: 200,
      backgroundColor: '#eeeeee',
    };

    const canvas = createCanvas(document, canvasInput);
    container.append(canvas);

    const c = canvas.getContext('2d')!;

    const params: TextParameters = {
      ...args,
    };

    drawText(c, params);

    drawDot(c, args.x, args.y);

    return container;
  },
  args: {
    x: 200,
    y: 50,
    fontSize: 24,
    fontFamily: 'sans-serif',
    color: 'black',
    text: 'Hello, World!',
  },
};
