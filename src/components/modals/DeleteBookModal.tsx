import { Button, Stack, Text, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import DeleteIcon from '@mui/icons-material/Delete';
import { showSuccessNotification } from '../notifications/Notifications';
import { Book } from '../../store/booksReducer';
import { useDispatch } from 'react-redux';

interface Props {
    book: Book;
}

function DeleteBookModal({ book }: Props) {

    const dispatch = useDispatch();

    const handleDelete = (book: Book) => {
        dispatch({ type: 'DELETE_BOOK', payload: book });
        showSuccessNotification()
    };

    const openModal = () => modals.openConfirmModal({
        centered: true,
        withCloseButton: false,
        size: 'lg',
        children: (
            <Stack>
                <Title order={3}>Delete Book: {book.name}</Title>
                <Text>Are you sure you want to delete this book?</Text>
            </Stack>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        confirmProps: { color: 'red' },
        onConfirm: () => handleDelete(book),
    });

    return (
        <Button
            variant="light"
            color="red"
            fullWidth
            mt="md"
            radius="md"
            leftIcon={<DeleteIcon fontSize='small' />}
            onClick={openModal}>
            Delete
        </Button>
    );
}

export default DeleteBookModal;