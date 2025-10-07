import axios from 'axios';
import { HUGGING_FACE_KEY, OPEN_AI_KEY } from '../keys/keys';

const huggingFaceURL = 'https://api-inference.huggingface.com/models';

export const getHuggingFaceResponse = async (msg: string) => {
  const response = await axios.post(
    huggingFaceURL + '/distilgpt2',
    {
      inputs: msg,
    },
    {
      headers: {
        Authorization: `Bearer ${HUGGING_FACE_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data[0]?.generate_text;
};

const openaiURL = 'https://api.openai.com/v1/chat/completions';

export const getOpenAIResponse = async (msg: string) => {
  try {
    const response = await axios.post(
      openaiURL,
      {
        model: 'gpt-4o-mini',
        messages: [
          {
            content: msg,
            role: 'user',
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPEN_AI_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    const errorMessage = error?.message;
    return 'An error occurred: ' + errorMessage;
  }
};
