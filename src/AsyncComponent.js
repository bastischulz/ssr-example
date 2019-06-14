import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(theme => ({
    p: {
        color: 'green'
    }
}))

const AsyncComponent = ({ children }) => {
    const [open, setOpen] = useState(false)
    const { p } = useStyles()

    return (
        <>
            <Drawer open={open} onClose={() => { setOpen(false) }}>
                <List>
                    {children.map(({ name }) => (
                        <ListItem button key={name}>
                            <ListItemText className={p} primary={name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Button onClick={() => { setOpen(true) }}>Open</Button>
        </>
    )
}

export default AsyncComponent
