import { Badge, Card, Group, ScrollArea, SimpleGrid, Stack, Text } from '@mantine/core';
import DeleteBookModal from '../modals/DeleteBookModal';
import EditBookModal from '../modals/EditBookModal';

interface Props {
    book: any;
}


function BookDetail({ book }: Props) {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: 300 }}>
            <Stack justify="space-around">

                <SimpleGrid cols={1} verticalSpacing="xs">
                    <Stack p={0} spacing={0}>
                        <Text weight={700} lineClamp={1}>{book.name}</Text>
                        <Text fz="sm" fs="italic" color="dimmed">{book.category}</Text>
                    </Stack>


                    <Badge variant="outline">
                        Price: ${book.price}
                    </Badge>
                </SimpleGrid>

                <ScrollArea h={80} type="hover" scrollbarSize={5} scrollHideDelay={0}>
                    <Text size="md">
                        {book.description}
                    </Text>
                </ScrollArea>

                <Group noWrap>
                    <EditBookModal book={book} />
                    <DeleteBookModal book={book} />
                </Group>

            </Stack>
        </Card>
    );
}

export default BookDetail;