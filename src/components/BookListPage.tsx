import { Box, Grid, Title, Group, AppShell, Header } from '@mantine/core';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import AddBookCard from './cards/AddBookCard';
import BookDetailsCard from './cards/BookDetailsCard';
import logo from '../images/logo.svg'
import { Book } from '../store/booksReducer';


function BookListPage() {

    const books = useSelector((state: RootState) => state.books);
    console.log(books)

    return (
        <AppShell header={
            <Group noWrap>
                <img src={logo} style={{ height: "10vmin" }} />
                <Title>React Book Store</Title>
            </Group>
        }>

            <Box p={10}>
                <Grid>
                    <Grid.Col xs={12} sm={6} md={4} lg={3}>
                        <AddBookCard />
                    </Grid.Col>

                    {books.map((book: Book, index: number) => (
                        <Grid.Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <BookDetailsCard book={book} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Box>

        </AppShell>
    );
}

export default BookListPage;