import ContactForm from '../components/ContactForm';

const WriteToExecutiveSecretary = () => {
    return (
        <ContactForm
            recipientTitle="Écrire au Secrétaire Exécutif"
            recipientName="M. le Secrétaire Exécutif"
            recipientRole="Secrétaire Exécutif de la Commune d'Avrankou"
            recipientImage="./avrankou.svg"
            accentColor="amber"
        />
    );
};

export default WriteToExecutiveSecretary;