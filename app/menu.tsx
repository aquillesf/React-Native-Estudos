import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { Stack, Link } from 'expo-router';        
import { Colors } from '@/constants/Colors';
import { FlatList } from 'react-native-gesture-handler';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';
export default function MenuScreen() {

    const colorScheme: 'light' | 'dark' | null = Appearance.getColorScheme() ?? 'light';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const Separator = () => <View style={styles.separator} />;
    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                    <View>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <Image source = {MENU_IMAGES[item.id - 1]} style={styles.image}/>
                    </View>
                )}
            />

            <Link href="/" style={ {marginHorizontal: 'auto'} } asChild>
                <Text>Ir para o Menu</Text>
            </Link>

        </Container>
    )
}

function createStyles(theme: { background: string; [key: string]: string | undefined }, colorScheme: 'light' | 'dark' | null ) {
    return StyleSheet.create({

        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,

        },

        title: {
            fontSize: 18,
            fontWeight: '700',
            color: theme.text,
            marginBottom: 6,
        },

        description: {
            fontSize: 14,
            color: colorScheme === 'dark' ? '#cccccc' : '#555555',
            marginBottom: 10,
        },

        image: {
            width: '100%',
            height: 180,
            borderRadius: 12,
            aspectRatio: 16 / 9,
            marginTop: 8,
        },

        separator: {
            height: 1,
            width: '50%',
            maxWidth: 300,
            marginBottom: 10,
            backgroundColor: colorScheme === 'dark' ? '#333' : '#000',
        },
    })
};