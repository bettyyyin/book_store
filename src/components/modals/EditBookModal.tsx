import { Button, Stack, TextInput, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Book } from '../../store/booksReducer';
import { showSuccessNotification } from '../notifications/Notifications';

type FormInputs = {
    name: string;
    price: number;
    category: string;
    description: string;
}

interface Props {
    book: Book;
}

function EditBookModal({ book }: Props) {

    const { register, getValues } = useForm<FormInputs>({
        defaultValues: {
            name: book.name,
            price: book.price,
            category: book.category,
            description: book.description,
        }
    })

    const dispatch = useDispatch();
    const handleUpdate = (book: Book) => {
        dispatch({ type: 'UPDATE_BOOK', payload: book });
        showSuccessNotification();
    }

    const openModal = () => modals.openConfirmModal({
        centered: true,
        withCloseButton: false,
        size: 'lg',
        children: (
            <form>
                <Stack>
                    <Title order={3}>Update Book Information</Title>
                    <TextInput label='Name' placeholder="Enter book name" {...register("name")} />
                    <TextInput label='Price' placeholder="Enter book price" type='number' {...register("price")} />
                    <TextInput label='Category' placeholder="Enter book category" {...register("category")} />
                    <TextInput label='Description' placeholder="Enter book description" {...register("description")} />
                </Stack>
            </form>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: () => handleUpdate({ ...getValues(), id: book.id }),
    });

    return (
        <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            leftIcon={<EditIcon fontSize='small' />}
            onClick={openModal}>
            Edit
        </Button>
    );
}

export default EditBookModal;