import ContactForm from '../components/ContactForm';

const WriteToMayor = () => {
    return (
        <ContactForm
            recipientTitle="Écrire au Maire"
            recipientName="M. le Maire"
            recipientRole="Maire de la Commune d'Avrankou"
            recipientImage="/avrankou.svg"
            accentColor="emerald"
        />
    );
};

export default WriteToMayor;