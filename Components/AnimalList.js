{/* Imports stuff from React and React Native... also imports PetCard info */ }

{/* IN CASE OF ANY ERROR WITH PETCARD ARRANGEMENTS GO TO imageContainer*/}
import { StyleSheet, Text, Pressable, View, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { PetCard } from './PetCard';

{/* Sets constant 'animals' and a new function 'setAnimals' equal to useState */ }
{/* After the constants are set, there is hardcoded information about each of the animals*/ }

export default function AnimalList({ navigation }) {
    const [animals, setAnimals] = useState([
        {
            name: 'Hydra',
            time: '2022-08-13 04:00:20',
            image: 'https://images.squarespace-cdn.com/content/v1/554e744ce4b026a2b08ca248/1618456576189-QHCCF3PD33OAW3H6AL13/2021_1_Vesta_CZ1_EricaDanger_8.jpg',
            breed: 'Calico Cat',
            age: '2 year and 2 months',
            sex: 'Male',
            weight: '65 lbs',
            shelter: 'Domestic Pet Rescue',
            desc: 'A stout and strong cat, he loves to have fun, and he likes playing with squeaky toys, he is an energetic young boy',
            notes: 'N/A',
        },
        {
            name: 'Fenrir',
            time: '2022-08-19 04:00:34',
            image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            breed: 'Black Cat',
            age: '5 years',
            sex: 'Female',
            weight: '70 lbs',
            shelter: 'Big Dog Rescue Network.',
            desc: 'She may be shy at first, but once she gets to know you more, she becomes very loyal to you, and will sit on your lap, she also likes to go on nice walks and enjoys sweet, tasty treats',
            notes: 'N/A',
        },
        {
            name: 'Lucifer',
            time: '2022-08-25 04:00:29',
            image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            breed: 'Munchkin Cat',
            age: '1 year',
            sex: 'Male',
            weight: '5 lbs',
            shelter: 'Beloved Pet Sanctuary',
            desc: 'This cat is hard of hearing so he might struggle to listen to you, he requires lots of care, he is such a sweetheart and loves laying on laps, and napping',
            notes: 'Lucifer is deaf, are intolerant of light, and have reduced vision in low light conditions',
        },
        {
            name: 'Chronos',
            time: '2022-08-31 04:00:18',
            image: 'https://p4.wallpaperbetter.com/wallpaper/539/65/318/cat-kitten-hat-hd-wallpaper-preview.jpg',
            breed: 'American Shorthair',
            age: '3 years and 6 months',
            sex: 'Female',
            weight: '22 lbs',
            shelter: 'Getting Wild Rescue',
            desc: 'It is fun-loving and playful, loves to go on walks and may play rough, but is a sweetheart.',
            notes: 'Chronos has a condition where raw spots appear on her body, use specialized shampoo (such as: KetoChlor Shampoo and Malaseb Shampoo) when washing her',
        },
        {
            name: 'Bob',
            time: '2022-09-06 04:00:25',
            image: 'https://images.petpress.net/wp-content/uploads/2019/11/F216CEB5-0F02-4894-8F61-FCD9D770C0E0.jpeg',
            breed: 'Persian Cat',
            age: '3 years 10 months',
            sex: 'Female',
            weight: '12 lbs',
            shelter: 'Tiny Paws Foundation.',
            desc: 'Is a cat who loves to chill at home, and will generally love the owner, he may be shy around other people but it takes time for her to get used to other people',
            notes: 'N/A',
        },
        {
            name: 'Quetzalcoatl',
            time: '2022-09-13 04:00:28',
            image: 'https://i.pinimg.com/originals/5c/92/ac/5c92ac042e5be8fab5c30635d0c36595.jpg',
            breed: 'Companion Cat',
            age: '1 year',
            sex: 'Male',
            weight: '4.5 lbs',
            shelter: 'Animal Haven',
            desc: 'A funny companion cat and a sweet bot, she loves running so much, and may be hyperactive, but he is just so full of life!',
            notes: 'Because she has allergies from certain chemicals in dog food (such as Melamine, MSG, Food dyes, corn syrup) a symptom of this allergy would be new hot spots appearing on her body... to learn more contact your local veterinarian',
        },
        {
            name: 'Chupacabra',
            time: '2022-09-19 04:00:38',
            image: 'https://i.pinimg.com/originals/8a/9a/c1/8a9ac1aa67aaf56efa2929624adac4b0.jpg',
            breed: 'Sphynx Cat',
            age: '4 years 10 months',
            sex: 'Male',
            weight: '32 lbs',
            shelter: 'Happy Dogs Animal Shelter',
            desc: 'A sweet and loyal boy, he loves playing sports, he is very excited to meet his new owner!',
            notes: 'N/A',
        },
        {
            name: 'Leviathan',
            time: '2022-09-25 04:00:49',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/British_blue_2009_%28cropped%29.jpg',
            breed: 'British Shorthair Cat',
            age: '5 years 11 months',
            sex: 'Female',
            weight: '17 lbs',
            shelter: 'Lucky Whiskers',
            desc: 'A chill cat, who loves walking all over the place, and enjoys eating',
            notes: 'N/A',
        },
        {
            name: 'Chimera',
            time: '2022-10-11 04:00:41',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F12%2F02%2Fbalinese-sitting-in-a-tree-718322914-2000.jpg',
            breed: 'Siamese/Balinese Cat',
            age: '2 years 7 months',
            sex: 'Male',
            weight: '12 lbs',
            shelter: 'Homeless Kitty Network',
            desc: 'Chimera loves the outdoors and nature, and also loves being carried everywhere it goes, he is so cute',
            notes: 'This cat has a condition commonly referred to as: Addisons disease which requires steroids for treatment, to learn more contact your local veterinarian',
        },
        {
            name: 'Pablo',
            time: '2022-10-14 04:00:37',
            image: 'https://i.pinimg.com/originals/34/1e/85/341e858f0482f736058eb4f2536a22d2.jpg',
            breed: 'Scottish Fold',
            age: '1 year',
            sex: 'Female',
            weight: '50 lbs',
            shelter: 'Pittie Love Rescue',
            desc: 'A cute little girl who is excited to meet everyone new she sees, he is very friendly with other dogs and children',
            notes: 'N/A',
        },
    ])
    {/* This constant: 'goToDetails' navigates to AnimalDetails*/ }
    const goToDetails = (animal) => {
        console.log(animal)
        navigation.navigate('AnimalDetails', animal);
    }
    const goToShelter = (animal) => {
        console.log(animal)
        navigation.navigate('ShelterOptions', animal);
    }
    const goToMarket = (animal) => {
        navigation.navigate('Market');
    }
    {/* The 'PetCard' outside of the 'Details' button... it displays the animals' names, times, images */ }
    return (
        <View style={styles.container}>
            
            <View style = {{marginTop: 80}}>
            <Image source={require('../assets/Safehouse_logo.png')} style={styles.safehouseLogo} />

            <TouchableOpacity style={styles.shelterButtonContainer} onPress={goToShelter}>
                {/* <Text>Shelter Button Text Placeholder</Text> */}
                <Image   source={require('../assets/shelter.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.marketButtonContainer} onPress={goToMarket}>
                {/* <Text>Shelter Button Text Placeholder</Text> */}
                <Image   source={require('../assets/market.png')} />
            </TouchableOpacity>
            </View>

            <FlatList style={styles.list}
            numColumns={2}
            columnWrapperStyle={styles.row}
            data = {animals}
            renderItem = {({ item }) => (
                <PetCard key={item.name} goToDetails={() => { goToDetails(item) }} name={item.name} time={item.time} image={item.image} />
            )}
            />
        </View>
        // <View style={styles.container}>
        //     <SafeAreaView style={styles.container}>
        //         <Image source={require('../assets/Safehouse_logo.png')} style={styles.safehouseLogo} />
        //         <ScrollView>
        //             <Pressable style={styles.shelterButtonContainer} onPress={goToShelter}>
        //             <Text>Shelter Button Text Placeholder</Text>
        //             </Pressable>
        //             <View style={styles.containerOfImageContainer}>
        //             <View style={styles.imageContainer}>
        //             {animals.map((animal) => (
        //                 <PetCard key={animal.name} goToDetails={() => { goToDetails(animal) }} name={animal.name} time={animal.time} image={animal.image} />
        //             ))}
        //             </View>
        //             </View>
        //         </ScrollView>
        //     </SafeAreaView>
        // </View>

    );
}

// style={{ flexDirection: 'row', flexWrap: 'wrap' }} ADD THIS FOR TWO COLUMNS OF IMAGES


{/* Style of the background behind PetCards */ }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    safehouseLogo: {
        alignSelf: 'center',
        marginLeft: 13
    },
    shelterButtonContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 50
    },
    marketButtonContainer: {
        position: 'absolute',
        alignSelf: 'flex-start',
        left: 50
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },
    containerOfImageContainer: {
        marginRight: 5,
    },
    list: {
        // marginLeft: 12,
        marginTop: 20,
    },
    row: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 10,
    }
});