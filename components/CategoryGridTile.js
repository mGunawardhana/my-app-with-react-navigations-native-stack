import {Pressable, StyleSheet, Text, View} from "react-native";

const CategoryGridTile = ({title, color}) => {
    return (
        <View style={styles.gridItems}>
            <Pressable style={styles.button}>
                <View style={styles.innerContainer}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,/* we can use background (shadows) */
    }, button: {
        flex: 1,
    }, innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryGridTile;
//TODO 17:04 next start