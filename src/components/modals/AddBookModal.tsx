import { Button, Stack, TextInput, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showSuccessNotification } from '../notifications/Notifications';
import { Book } from '../../store/booksReducer';
const _ = require('lodash');

type FormInputs = {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
}

function AddBookModal() {

    const { register, getValues, reset } = useForm<FormInputs>()

    const dispatch = useDispatch();
    const handleAddition = (book: Book) => {
        dispatch({ type: 'ADD_BOOK', payload: book });
        reset();
        showSuccessNotification();
    };

    const openModal = () => modals.openConfirmModal({
        centered: true,
        withCloseButton: false,
        size: 'lg',
        children: (
            <form>
                <Stack>
                    <Title order={3}>Add A New Book</Title>
                    <TextInput label='Name' placeholder="Enter book name" {...register("name")} />
                    <TextInput label='Price' placeholder="Enter book price" type='number' {...register("price")} />
                    <TextInput label='Category' placeholder="Enter book category" {...register("category")} />
                    <TextInput label='Description' placeholder="Enter book description" {...register("description")} />
                </Stack>
            </form>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: () => handleAddition({ ...getValues(), id: _.uniqueId() }),
    });

    return (
        <Button variant={'outline'} size='xl' radius={'xl'} onClick={openModal}>
            <AddIcon fontSize='large' />
        </Button>
    );
}

export default AddBookModal;

