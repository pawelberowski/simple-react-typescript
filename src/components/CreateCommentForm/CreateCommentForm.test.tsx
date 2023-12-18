import { beforeEach, Mock, vi, describe, expect, it } from 'vitest';
import { createComment } from '../../api/commentsApi';
import { fireEvent, render } from '@testing-library/react';
import { CreateCommentForm } from './index.tsx';

vi.mock('../../api/commentsApi.tsx', () => ({
  createComment: vi.fn(),
}));

describe('The CreateCommentForm', () => {
  beforeEach(() => {
    (createComment as Mock).mockReturnValue(new Promise(() => null));
  });
  describe('when the user types the name and the body', () => {
    it('should make an attempt to create the POST request', () => {
      const createCommentForm = render(<CreateCommentForm />);

      const nameInput = createCommentForm.getByPlaceholderText('name');
      const bodyInput = createCommentForm.getByPlaceholderText('body');

      const name = 'Comment name';
      const body = 'Comment body';

      fireEvent.change(nameInput, { target: { value: name } });
      fireEvent.change(bodyInput, { target: { value: body } });

      const button = createCommentForm.getByRole('button');

      fireEvent.click(button);

      expect(createComment).toBeCalledWith({
        name,
        body,
      });
    });
  });
});
