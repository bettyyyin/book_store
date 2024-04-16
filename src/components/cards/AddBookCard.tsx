import { Card, Center, Stack, Text } from '@mantine/core';
import AddBookModal from '../modals/AddBookModal';


function AddBookCard() {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: 300 }}>
            <Center w="100%" h="100%" mx="auto">
                <Stack>
                    <Text weight={700} lineClamp={1}>ADD A NEW BOOK</Text>
                    <AddBookModal />
                </Stack>
            </Center>
        </Card>
    );
}

export default AddBookCard;