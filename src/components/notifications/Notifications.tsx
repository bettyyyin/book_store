import { showNotification } from "@mantine/notifications";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


export const showSuccessNotification = () => (
    showNotification({
        color: 'green.6',
        icon: <DoneIcon />,
        title: 'System Notification',
        message: 'Action Success',
    })
)

export const showErrorNotification = () => (
    showNotification({
        color: 'red.6',
        icon: <CloseIcon />,
        title: 'System Notification',
        message: 'Action Fail',
    })
)