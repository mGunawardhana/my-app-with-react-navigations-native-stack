import {Pressable, StyleSheet, Text, View} from "react-native";

const CategoryGridTile = ({title, color}) => {
    return (
        <View style={styles.gridItems}>
            <Pressable android_ripple={{color: '#ccc'}}
                /* android ripple effect is responsible
                 to showing the clickable effect  */
                       style={styles.button}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
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
        elevation: 4, /* we can use background (shadows) this one is
        not working for ios app */
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: '0.25',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 8,
    }, button: {
        flex: 1,
    }, innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default CategoryGridTile;
//TODO 17:04 next start