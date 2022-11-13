
function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer>
            <div class="main-footer">
                <small>&copy; {year} Tyler Duprey. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer